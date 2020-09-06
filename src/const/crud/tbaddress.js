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
      "label": "客户",
      "prop": "memberId",
      editDisplay: false
    },	  {
      "type": "input",
      "label": "收货人",
      "prop": "receiverName",
      rules: [{
        required: true,
        message: "请输入收货人",
        trigger: "blur"
      }]
    },	  {
      "type": "input",
      "label": "电话",
      "prop": "receiverTelephone",
      rules: [{
        required: true,
        message: "请输入收货人电话",
        trigger: "blur"
      }]
    },	  {
      "type": "input",
      "label": "住址",
      "prop": "receiverAddress",
      rules: [{
        required: true,
        message: "请输入收货人住址",
        trigger: "blur"
      }]
    },	  {
      "type": "select",
      "label": "默认地址",
      "prop": "isDefault",
      dicUrl: '/admin/dict/type/address_type',
      rules: [{
        required: true,
        message: "请选择地址状态",
        trigger: "blur"
      }]
    }  ]
}
