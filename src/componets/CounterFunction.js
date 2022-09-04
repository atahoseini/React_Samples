import React, {useMemo} from 'react'

//useMemo = PureComponent

export const CounterFunction = ({counter}) => {
    React.useEffect(() => {
       console.log('CounterFunction ComponentDidUpdate');
    }, [counter]) //=>  [counter] => ShouldComponentUpdate
    return (
        <div>
            Counter Function : {counter}
        </div>
    )
}
