export const validateEmail = (rule: any, value: string, callback: (error?: Error) => void) => {
    if (value === '') {
        callback(new Error('请输入邮件'));
    } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)) {
        callback(new Error('请输入正确的邮件'));
    } else {
        callback();
    }
};