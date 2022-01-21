import { Directive, mountComponent } from 'nefbl'

@Directive({
    selector: "ui-lazy"
})
export default class {

    $update(el, binding) {
        if (binding.value) {
            el.innerHTML = ""
            mountComponent(el, binding.value, this['_module'])
            el.children[0].setAttribute('class', 'doc-view')
        }
    }
}
