const fs = require('fs');
var _ = require('lodash');
const str = fs.readFileSync('./report.json','utf8')
const {exec} = require('child_process')
const axios = require('axios')
// console.log(str)




exec('npx cypress run --browser electron --reporter json --spec "cypress/integration/Profile/profile_test_spec.js" > report.json 2>&1', (error, stdout, stderr)=> {
        const arr = str.split('')
        const newArr = _.dropWhile(arr, function(o) { return o !== '{' });
        const final = JSON.parse(_.dropRightWhile(newArr, function(o) { return o !== '}'}).join(""))
        const url = `https://api.practitest.com/api/v2/projects/15064/runs.json?developer_email=${encodeURIComponent('robertknowles02@msn.com')}&api_token=a80803bd9e8b0d2f59b43b82393c25dbd37c9eed`;
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const newData = final.tests.map(el => {
        let status 
        if(_.isEmpty(el.err, true)){
            status = 'PASSED'
        } else {
            status = 'FAILED'
        }
        return {name: el.title, "expected-results": "True", status}
    })
    const data = {
      data: {
        type: "runs",
        attributes: { "instance-id": 22734563 },
        steps: {
          data: newData
        }
      }
    };
     axios.post(url, data, config).then(result => console.log(result.data.data.attributes));
})


