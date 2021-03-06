const rules = {
    email: {
        required: { value: true, message: 'Email harus diisi.' },
        maxLength: {
            value: 255, message: 'Panjang email maksimal 255 karakter.'
        }
    },
    password: {
        required: { value: true, message: 'Password harus diisi.' },
        maxLength: {
            value: 255, message: 'Panjang password maksimal 255 karakter.'
        }
    }
}
// (1) export rules
export { rules }