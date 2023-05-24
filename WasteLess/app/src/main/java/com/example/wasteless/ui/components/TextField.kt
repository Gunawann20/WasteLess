package com.example.wasteless.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.tooling.preview.Preview
import com.example.wasteless.ui.theme.WasteLessTheme

@Composable
fun TextField(
    label: String,
    modifier: Modifier = Modifier,
    onTextChange: (String) -> Unit,
){
    var textField by remember {
        mutableStateOf(TextFieldValue(""))
    }
    OutlinedTextField(
        value = textField,
        onValueChange = {
            textField = it
            onTextChange(it.text)
                        },
        label = { Text(label)},
        maxLines = 1,
        modifier = modifier.fillMaxWidth(),
        colors = TextFieldDefaults.outlinedTextFieldColors(
            focusedBorderColor = MaterialTheme.colors.secondary,
            unfocusedBorderColor = MaterialTheme.colors.secondary
        ),
    )
}

@Preview(showBackground = true)
@Composable
fun TextFieldPreview(){
    WasteLessTheme {

    }
}