package com.example.android.quizapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private EditText editText;
    private TextView nameView;
    private Button btnDisplay;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        nameView = (TextView) findViewById(R.id.nameView);
        editText = (EditText) findViewById(R.id.editText);
        btnDisplay = (Button) findViewById(R.id.submit);
    }

    /*
    This method is called when Next Button is clicked
     */
    public void Submit(View view) {

        String str = editText.getText().toString();

        //This is the   object which will navigate to next page
        Intent intent = new Intent(getApplicationContext(), Main2Activity.class);
        intent.putExtra("message", str);

        startActivity(intent);
    }

}