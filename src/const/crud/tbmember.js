export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  "column": [
	  {
      "type": "input",
      "label": "主键id",
      "prop": "id",
      "showColumn": false,
      "editDisplay": false,
      "addDisplay": false
    },	  {
      "type": "input",
      "label": "用户名",
      "prop": "userName",
      rules: [{
        min: 3,
        max: 10,
        required: true,
        message: "请输入3-10位用户名",
        trigger: "blur"
      }]
    },	  {
      "type": "select",
      "label": "性别",
      "prop": "sex",
      dicUrl: '/admin/dict/type/sex_type',
      rules: [{
        required: true,
        message: "请选择性别",
        trigger: "blur"
      }]
    },	  {
      "type": "input",
      "label": "密码",
      "prop": "password",
      "showColumn": false,
    },	  {
      "type": "input",
      "label": "确认密码",
      "prop": "repassword",
      "showColumn": false
    },	  {
      "type": "input",
      "label": "手机号",
      "prop": "telephone",
      rules: [{
        min: 11,
        max: 11,
        required: true,
        message: "请输入11位手机号",
        trigger: "blur"
      }]
    },	  {
      "type": "input",
      "label": "邮箱",
      "prop": "email",
      rules: [{
        type: 'email',
        required: false,
        message: "请输入合法邮箱格式",
        trigger: "blur"
      }]
    },	  {
      "type": "input",
      "label": "地址",
      "prop": "address",
      rules: [{
        required: true,
        message: "请输入地址",
        trigger: "blur"
      }]
    },	  {
      "type": "select",
      "label": "账户状态",
      "prop": "state",
      dicUrl: '/admin/dict/type/account_status',
      rules: [{
        required: true,
        message: "请选择账户状态",
        trigger: "blur"
      }]
    },	  {
      "type": "input",
      "label": "头像",
      "prop": "file",
      formatter: function(row, value, label, column){
        if(value){
          return `<img src=${value} width=50 height=50 />`
        }
        return ''
      }
    },	  {
      "type": "input",
      "label": "描述",
      "prop": "description"
    },	  {
      "type": "input",
      "label": "积分",
      "prop": "points"
    },	  {
      "type": "input",
      "label": "余额",
      "prop": "balance"
    },	  {
      "type": "input",
      "label": "创建时间",
      "prop": "created",
      "addDisplay": false,
      "editDisabled": true
    },	  {
      "type": "input",
      "label": "更新时间",
      "prop": "updated",
      "addDisplay": false,
      "editDisabled": true
    }  ]
}
