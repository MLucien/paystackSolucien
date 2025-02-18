'use strict';

var root = '/subscription';
var roots = '/subscription/{code}';


module.exports = {

  /*
  Create subscription
  */
  create: {
      method: 'post',
      endpoint: root,
      params: ['customer*', 'plan*', 'authorization']
    },

  /*
  Disable subscription
  */
  disable: {
      method: 'post',
      endpoint: root,
      params: ['code*', 'token*']
    },

  /*
  Enable subscription
  */
  enable: {
      method: 'post',
      endpoint: root,
      params: ['code*', 'token*']
    },

  /*
  Get subscription
  */
  get: {
      method: 'get',
      endpoint: [root, '/{id_or_subscription_code}'].join(''),
      args: ['id_or_subscription_code']
  },

  /*
  List subscription
  */
  list: {
      method: 'get',
      endpoint: root
    },

    /*
    Update subscription
    */
  update: {
    method: "get",
    // endpoint:[root, '/manage/link'].join(''),
    route: `${route}/{code}/manage/link`,
    //  params: ['code*','id_or_subscription_code'],
    params: ["code"],
  },

};
