interface Config {
    service: string
    port: number
    senderMail: string
    senderPassword: string
    recipientMail: string
    website: string
}

export const nodemailerConfig: Config = {
    service: 'Gmail',
    port: 465,
    senderMail: 'vitalii.grigorash.job@gmail.com',
    senderPassword: '1q2w3e4R5Tgrigorash',
    recipientMail: 'vitalii.grigorash@yandex.ru',
    website: 'stroi.ooorobip.beget.tech'
};