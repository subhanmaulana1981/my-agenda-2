import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddToDo({ submitHandler }) {
    const [text, setText] = useState("");
    
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style = {styles.input}
                placeholder="Input agenda baru.."
                onChangeText={(val) => changeHandler(val)}
            />
            <Button 
                onPress={() => submitHandler(text)}
                color="coral"
                title="Tambah agenda" 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    }
})