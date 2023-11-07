import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"

import { s } from './AddTodo.styles'

const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')
    const handleChangeText = (text) => {
        setValue(text)
    }
    const handleSubmit = () => {
        if (value) {
            onSubmit(value)
            setValue('')
        }
    }
    return (
        <View style={s.block}>
            <TextInput style={s.input} value={value} onChangeText={handleChangeText} />
            <Button title="Добавить" onPress={handleSubmit} />
        </View>
    )
}

export default AddTodo