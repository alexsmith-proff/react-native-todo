import { FlatList, Text, View } from "react-native"

import { s } from './TodoList.styles'

const TodoList = ({ todos }) => {
    return (
        <View style={s.list}>
            <FlatList
                data={todos}
                renderItem={({ item }) =>
                (
                    <View key={item.id}>
                        <Text>{item.title}</Text>
                    </View>
                )
                }
            />
        </View>
    )
}



export default TodoList