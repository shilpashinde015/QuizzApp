package com.example.android.quizapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.TextView;
import android.widget.Toast;

public class Main3Activity extends AppCompatActivity {

    public String name;
    private CheckBox chkJupiter, chkMercury, chkVenus;
    private TextView mscoreView;
    private Button btnDisplay;
    private TextView nameView;
    int score;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);

        nameView = (TextView) findViewById(R.id.name_view);

        chkJupiter = (CheckBox) findViewById(R.id.chkJupiter);
        chkMercury = (CheckBox) findViewById(R.id.chkMercury);
        chkVenus = (CheckBox) findViewById(R.id.chkVenus);
        mscoreView = (TextView) findViewById(R.id.Score_Value);
        btnDisplay = (Button) findViewById(R.id.submitNext2);

        Intent intent1 = getIntent();
        score = intent1.getIntExtra("score", 0);
        Log.i("Main3Activity", "score" + Integer.toString(score));

        Intent intent = getIntent();
        String str = intent.getStringExtra("message");
        nameView.setText(str);

    }
    /*
       This method is called when Next Button is clicked
        */
    public void SubmitNext2(View view) {


        //Data Validation for the CheckButton
        if (chkMercury.isChecked() && chkVenus.isChecked()) {
            Toast.makeText(getApplicationContext(), "Correct Answer", Toast.LENGTH_SHORT).show();
            score += 1;
            score_display(score);
        } else {
            Toast.makeText(getApplicationContext(), "Wrong Answer", Toast.LENGTH_SHORT).show();
        }


        int id = Integer.parseInt(mscoreView.getText().toString());
        Intent page3 = new Intent(Main3Activity.this, Main4Activity.class);
        Log.i("MainActivity3", "score" + Integer.toString(id));
        page3.putExtra("score", id);
        startActivity(page3);
    }
    /*
        This method display score on textbox
     */
    private void score_display(int score) {
        mscoreView.setText("" + score);
    }
}
