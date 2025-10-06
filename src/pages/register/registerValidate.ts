export const validateEmail = (rule: any, value: string, callback: (error?: Error) => void) => {
    if (value === '') {
        callback(new Error('请输入邮箱'));
    } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)) {
        callback(new Error('请输入正确的邮箱'));
    } else {
        callback();
    }
};

export const validateRepeatpassword = (password: string) => {
    return (rule: any, value: string, callback: (error?: Error) => void) => {
        console.log(password, '======接收的密码======');
        if (value === '') {
            callback(new Error('请输入密码'));
        } else if (value !== password) {
            callback(new Error('两次密码不一致'));
        } else {
            callback();
        }
    };
};
