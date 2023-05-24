package com.example.wasteless.ui.screen.auth.register

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.wasteless.R
import com.example.wasteless.ui.components.ButtonCustom
import com.example.wasteless.ui.components.EmailtextField
import com.example.wasteless.ui.components.TextField
import com.example.wasteless.ui.theme.WasteLessTheme

@Composable
fun RegisterScreen(
    modifier: Modifier = Modifier
){
    var nama by remember {
        mutableStateOf("")
    }
    var email by remember {
        mutableStateOf("")
    }
    var password by remember {
        mutableStateOf("")
    }
    Column(
        modifier = modifier.padding(start = 16.dp, end = 16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Image(
            painter = painterResource(id = R.drawable.logowastelesfix),
            contentDescription = "Logo wasteless",
            alignment = Alignment.Center,
            modifier = modifier.size(80.dp)
        )
        Text(
            text = "Registe",
            style = MaterialTheme.typography.subtitle1.copy(
                fontWeight = FontWeight.Bold,
                fontSize = 35.sp,
            )
        )
        Spacer(modifier = modifier.padding(30.dp))
        TextField(label = "Nama lengkap", onTextChange = {
            nama = it
        })
        Spacer(modifier = modifier.padding(2.dp))
        EmailtextField(onTextChange = {
            email = it
        })
        Spacer(modifier = modifier.padding(2.dp))
        TextField(label = "Password", onTextChange = {
            password = it
        })
        Spacer(modifier = modifier.padding(30.dp))
        ButtonCustom(text = "Register") {
            
        }
        Spacer(modifier = modifier.padding(80.dp))
        Row(
            modifier = modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(text = "Sudah punya akun?")
            Text(
                text = "Login",
                style = MaterialTheme.typography.subtitle1.copy(
                    fontWeight = FontWeight.Bold,
                    fontSize = 20.sp
                )
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
fun RegisterScreenPreview(){
    WasteLessTheme {
        RegisterScreen()
    }
}