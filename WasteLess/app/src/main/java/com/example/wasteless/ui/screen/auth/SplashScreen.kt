package com.example.wasteless.ui.screen.auth

import android.window.SplashScreen
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.wasteless.R
import com.example.wasteless.ui.components.ButtonCustom
import com.example.wasteless.ui.components.TextField
import com.example.wasteless.ui.theme.WasteLessTheme

@Composable
fun SplashScreen(
    modifier: Modifier = Modifier
){
    Box(modifier = modifier.fillMaxSize()){
        Image(
            painter = painterResource(id = R.drawable.splashscreen),
            contentDescription = "Background splashscreen",
            modifier = modifier.fillMaxSize(),
            contentScale = ContentScale.Crop
        )
        Column(
            modifier = modifier.padding(top = 320.dp, start = 16.dp, end = 16.dp)
        ) {
            Text(
                text = "Bagikan makanan berlebihmu",
                color = Color.White,
                style = MaterialTheme.typography.body1.copy(
                    fontSize = 35.sp,
                    fontWeight = FontWeight.SemiBold
                )
            )
            Text(
                text = "Kami menghubungkan mereka yang memiliki makanan berlebih dengan mereka yang membutuhkannya, menyatukan kelimpahan dan kebutuhan dalam suatu platform yang memudahkan berbagi makanan secara efisien dan berdampak positif.",
                color = Color.White,
            )
            Spacer(modifier = modifier.padding(30.dp))
            ButtonCustom(text = "Get started") {
                
            }
        }

    }
}

@Preview(showBackground = true)
@Composable
fun SplashScreenPreview(){
    WasteLessTheme {
        SplashScreen()
    }
}
