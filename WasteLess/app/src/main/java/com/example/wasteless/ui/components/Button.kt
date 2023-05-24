package com.example.wasteless.ui.components

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun ButtonCustom(
    text: String,
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
){
    androidx.compose.material.Button(
        onClick = { onClick() },
        contentPadding = PaddingValues(16.dp),
        modifier = modifier.fillMaxWidth().clip(RoundedCornerShape(6.dp)),
        colors = ButtonDefaults.buttonColors(backgroundColor = MaterialTheme.colors.secondary)
    ) {
        Text(
            text = text,
            style = MaterialTheme.typography.button.copy(
                fontWeight = FontWeight.SemiBold,
                fontSize = 16.sp,
                fontFamily = FontFamily.SansSerif
            ),
            color = MaterialTheme.colors.background
        )
    }
}