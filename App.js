import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './src/components/NavBar/NavBar';
import TodoList from './src/components/TodoList/TodoList';
import AddTodo from './src/components/AddTodo/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([])
  const handleSubmit = (text) => {
    setTodos([...todos, { id: Date.now().toString(), title: text }])
    console.log(todos);
  }
  return (
    <View>
      <NavBar title={'Todo App'} />
      <View style={s.container}>
        <AddTodo onSubmit={handleSubmit} />
        <TodoList todos={todos} />
      </View>
    </View>
  )  
}

const s = StyleSheet.create({
  container: {
    padding: 20
  }
})
