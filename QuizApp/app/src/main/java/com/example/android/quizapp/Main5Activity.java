package com.example.android.quizapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class Main5Activity extends AppCompatActivity {
    public static int score;
    String name;
    private EditText editText;
    private TextView mscoreView;
    private TextView nameView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main5);
        nameView = (TextView) findViewById(R.id.name_view);
        mscoreView = (TextView) findViewById(R.id.Score_Value);
        editText = (EditText) findViewById(R.id.editText);

        Intent intent1 = getIntent();
        score = intent1.getIntExtra("score", 0);
        Log.i("MainActivity5_4", "score" + Integer.toString(score));

        Intent intent = getIntent();
        String str = intent.getStringExtra("message");
        nameView.setText(str);

    }
    /*
       This method is called when Next Button is clicked
        */
    public void SubmitNext4(View view) {

        String str = editText.getText().toString();
        //Data Validation for the EditText
        if (str.equalsIgnoreCase("Earth")) {
            Toast.makeText(getApplicationContext(), "Correct Answer", Toast.LENGTH_SHORT).show();
            score += 1;
            score_display(score);
        } else {
            Toast.makeText(getApplicationContext(), "Wrong Answer", Toast.LENGTH_SHORT).show();
        }


        int id = Integer.parseInt(mscoreView.getText().toString());
        Intent newpage = new Intent(Main5Activity.this, Main6Activity.class);
        Log.i("MainActivity5", "score" + Integer.toString(id));
        newpage.putExtra("score", id);
        startActivity(newpage);
    }
    /*
            This method display score on textbox
     */
    private void score_display(int score) {
        mscoreView.setText("" + score);
    }
}
