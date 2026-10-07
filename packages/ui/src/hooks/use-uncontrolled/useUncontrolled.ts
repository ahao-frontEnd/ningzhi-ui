import { useCallback, useRef, useState } from 'react'

/**
 * 用于受控组件和非受控组件的切换
 * 原生的form组件目前用这个有点问题，得在外面包一层，因为原生onChange的event是原生的，而不是值
 *
 * @export
 * @interface UseUncontrolled
 * @template T
 */
export interface UseUncontrolled<T> {
    /** 受控状态值 */
    value?: T

    /** 非受控状态默认值 */
    defaultValue?: T

    /** 如果没有给 value 或 defaultValue，那么就用 finalValue 作为默认值 */
    finalValue?: T

    /** 受控状态下的 onChange */
    // eslint-disable-next-line no-unused-vars
    onChange?(value: T): void
}

/**
 *
 * @param param0
 * @returns
 *  在使用的组件内：
    const [_value, handleChange] = useUncontrolled({
        value: contextProps.checked ?? checked,
        defaultValue: defaultChecked,
        finalValue: false,
    });

    使用的地方用：_value
    组件改值的地方：
        ctx ? contextProps.onChange(event) : onChange?.(event);
        handleChange(event.currentTarget.checked);
 */
// eslint-disable-next-line no-unused-vars
export function useUncontrolled<T>({ value, defaultValue, finalValue, onChange }: UseUncontrolled<T>): [T, (value: T) => void, boolean] {
    const isControlledRef = useRef(value !== undefined)
    if (value !== undefined) {
        isControlledRef.current = true
    }
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue === undefined ? finalValue : defaultValue)

    const handleUncontrolledChange = useCallback(
        (val: T) => {
            setUncontrolledValue(val)
            onChange?.(val)
        },
        [onChange]
    )

    if (isControlledRef.current) {
        return [value as T, onChange || (() => void 0), true]
    }

    // if (value !== undefined) {
    //     return [value as T, onChange || (() => void 0), true]
    // }

    return [uncontrolledValue as T, handleUncontrolledChange, false]
}
