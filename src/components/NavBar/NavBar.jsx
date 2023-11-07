import { Text, View } from "react-native"

import { s } from './NavBar.styles'

const NavBar = ({ title }) => {
    return (
        <View style={s.navbar}>
            <Text style={s.text}>{title}</Text>
        </View>
    )
}

export default NavBar