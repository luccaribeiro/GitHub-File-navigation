export function debouncerdecorator(f, tempo) {
    let _timeoutCode = null
    function decorada() {
        if(_timeoutCode) {
            clearTimeout(_timeoutCode)
        }
        const _this = this
        const _arguments = arguments
        _timeoutCode = setTimeout(() => {
            f.apply(_this, _arguments)
            _timeoutCode = null
        }, tempo)
    }
    return decorada
}
