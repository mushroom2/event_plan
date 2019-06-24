const initState = {
    user: null
};

export default function (state=initState, {type, payload}) {
    if (type === 'FB_USER_LOGIN'){
        console.log(payload);
        return {...state, user: payload};
    }
    return {...state}}