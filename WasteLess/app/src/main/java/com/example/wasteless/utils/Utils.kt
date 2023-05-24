package com.example.wasteless.utils

object Utils {
    fun String.isValidEmail(): Boolean {
        val emailRegex = Regex("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}")
        return matches(emailRegex)
    }
}