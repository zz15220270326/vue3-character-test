const { Router } = require('express');
const HTTP = require('../libs/http');
const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const router = Router();
const key = 'c6afa246be195680b76531737b0107e0';
const apis = {
  GET_QUESTIONS: 'http://apis.juhe.cn/fapig/character_test/questions',
  GET_ANSWERS: 'http://apis.juhe.cn/fapig/character_test/analysis',
};
const http = new HTTP({});

router.get('/', (req, res) => {
  res.send({
    msg: 'test! your character info now',
    error_code: 0,
    status: 'Success'
  });
});

router.get('/start', async (req, res) => {
  const {
    level = 'senior' // 	返回题目数量（senior:12道题目；默认：4道题目）
  } = req.query;
  
  const fileData = JSON.parse(readFileSync(resolve(__dirname, '../database/character/questions.json'), 'utf8'));
  
  const questionInfo = await http.ajax({
    url: apis.GET_QUESTIONS,
    method: 'GET',
    params: {
      level,
      key,
    },
  });
  if (questionInfo) {
    const { error_code, reason, result = [] } = questionInfo;
    if (
      error_code == 0
      || reason?.toLowerCase() === 'success'
    ) {
      const data = result.map(item => ({
        question: item.q || '',
        optionA: item.a,
        optionB: item.b,
        optionAValue: item.ia,
        optionBValue: item.ib,
      }));
      const totalData = [...fileData, ...data];
      writeFileSync(resolve(__dirname, '../database/character/questions.json'), JSON.stringify(totalData));

      // 请求成功
      res.send({
        error_code,
        reason,
        data,
      });
    } else {
      // 请求失败
      res.send({
        error_code: error_code || 404,
        reason: reason || 'NotFound',
        data: [],
      });
    }
    return;
  }
});

router.post('/submit', async (req, res) => {
  const { answers } = req.body;

  console.log(req.body);

  if (!answers) {
    res.send({
      error_code: 406,
      reason: '没有答案, 无法进行',
    });
    return;
  }

  // 答案是一个字符串, 需要使用英文逗号隔开
  const analysis = await http.ajax({
    url: apis.GET_ANSWERS,
    method: 'POST',
    data: {
      key,
      answers,
    },
  });

  if (analysis) {
    const { error_code, reason, result = {} } = analysis;
    if (!error_code || String(reason).toLowerCase() === 'success') {
      res.send({
        error_code,
        reason,
        data: {
          ...result,
        }
      });
      // res.send({
      //   "error_code": 0,
      //   "reason": "success",
      //   "data": {
      //       "alphabet": "ISTJ",
      //       "vocabulary": "Logistician",
      //       "occupation": "物流师",
      //       "summarize": [
      //           "物流师 (ISTJ)是具有内向、观察力、思考力和判断力的人格特质的人。这些人往往内敛而任性，对生活有着理性的看法。他们仔细地组织他们的行动，并有条不紊地执行它们。"
      //       ],
      //       "desc": [
      //           "物流师以他们的诚信为荣。具有这种性格类型的人言出必行，当他们承诺做某事时，他们一定会坚持到底。",
      //           "这种性格类型占总人口的很大一部分，虽然后勤人员可能不是特别浮华或寻求关注，但他们在保持社会稳固、稳定的基础上所做的不仅仅是他们的职责。在他们的家庭和社区中，物流师通常因其可靠性、实用性以及即使在压力最大的情况下也能保持脚踏实地和合乎逻辑的能力而赢得尊重。"
      //       ],
      //       "characteristic": [
      //           {
      //               "title": "诚信生活",
      //               "desc": [
      //                   "物流师自尊的核心来自于个人诚信。具有这种性格类型的人相信在任何情况下都有正确的方法来进行——任何假装不这样的人都可能试图改变规则以适应自己的目的。物流师非常尊重结构和传统，他们经常被提供明确等级和期望的组织、工作场所和教育环境所吸引。",
      //                   "物流师性格类型的人很少会犹豫对自己的行为和选择负责。一般来说，他们很快就会承认自己的错误，承认事实，即使这不会让他们看起来很好。对物流师来说，诚实远比炫技重要，他们宁愿满足自己的良心，也不愿撒谎给别人留下好印象。",
      //                   "因为他们无论如何都努力履行自己的义务，物流师的个性经常被那些未能将自己保持在同一标准的人所困惑。有时，后勤人员可能会不公平地误判那些无法与他们严格的自我控制相匹配的人——怀疑某人在实际应对其他挑战时是懒惰或不诚实。即使后勤人员不大声说出这些判断，他们的蔑视也可以通过任何方式传达出来，从而为他们赢得了有点严格或冷漠的名声。"
      //               ]
      //           },
      //           {
      //               "title": "收拾残局",
      //               "desc": [
      //                   "物流师的奉献精神是一种令人钦佩的品质，它推动了他们的许多成就。但它也可能成为其他人利用的弱点。凭借其强烈的职业道德和责任感，后勤人员可能会经常发现自己肩负着他人的责任。即使他们不抱怨这种情况，如果物流人员不断被期望——或自己承担——为他们的同事、朋友或亲人收拾残局，他们最终可能会筋疲力尽或气馁。",
      //                   "物流师并不以容易表达自己的情绪而闻名，但这并不意味着具有这种性格类型的人在承受超过体重时不会感到沮丧或怨恨。除非他们确保他们的关系是平衡和可持续的，否则后勤人员最终可能会损害他们认为需要保护的稳定性。好消息是，通过学习设定适当的界限并在他们过度紧张时大声疾呼，物流师可以为世界提供他们许多天赋的全部好处，包括他们的清晰性、忠诚度和可靠性。"
      //               ]
      //           }
      //       ]
      //   }
      // });
    return;
    } else {
      res.send({
        error_code,
        reason,
        data: [],
      });
    }
    
    return;
  }
});

module.exports = router;
