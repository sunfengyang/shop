const MOCKURL = 'http://www.weichuang.com/'; // mock模拟出的url
const SERVERURL = 'http://localhost:3000/';//真实URL

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    getHotProduct: MOCKURL + 'getHotProduct',
    registUser: SERVERURL + 'user/registUser',  //user对应后端的控制器，register对应user控制器下的一个方法
    loginUser: SERVERURL + 'user/loginUser',
};
export default URL;