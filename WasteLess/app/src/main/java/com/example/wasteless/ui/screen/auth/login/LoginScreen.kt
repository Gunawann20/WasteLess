package com.example.wasteless.ui.screen.auth.login

import android.graphics.Paint.Align
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.wasteless.ui.components.ButtonCustom
import com.example.wasteless.ui.components.EmailtextField
import com.example.wasteless.ui.components.TextField
import com.example.wasteless.ui.theme.WasteLessTheme

@Composable
fun LoginScreen(
    modifier: Modifier = Modifier
){
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
            painter = painterResource(id = com.example.wasteless.R.drawable.logowastelesfix),
            contentDescription = "Logo wasteless",
            alignment = Alignment.Center,
            modifier = modifier.size(80.dp)
        )
        Text(
            text = "Welcome back",
            style = MaterialTheme.typography.subtitle1.copy(
                fontWeight = FontWeight.Bold,
                fontSize = 35.sp
            ),
        )
        Spacer(modifier = modifier.padding(30.dp))
        EmailtextField(onTextChange = {
            email = it
        })
        Spacer(modifier = modifier.padding(2.dp))
        TextField(label = "Password",
            onTextChange = {
                password = it
            }
        )
        Spacer(modifier = modifier.padding(30.dp))
        ButtonCustom(text = "Login") {

        }
        Spacer(modifier = modifier.padding(100.dp))
        Row(
            modifier = modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(text = "Belum punya akun?")
            Text(
                text = "Register",
                style = MaterialTheme.typography.subtitle1.copy(
                    fontSize = 20.sp,
                    fontWeight = FontWeight.Bold
                )
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
fun LoginScreenPreview(){
    WasteLessTheme {
        LoginScreen()
    }
}