package com.example.android.quizapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

public class Main4Activity extends AppCompatActivity {

    private RadioGroup radioGroup;
    private RadioButton radioSelectButton;
    private Button btnDisplay;
    private TextView mscoreView;
    int score;
    public String name;
    private TextView nameView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main4);
        nameView = (TextView) findViewById(R.id.name_view);
        radioGroup = (RadioGroup) findViewById(R.id.radioGroup);
        mscoreView = (TextView) findViewById(R.id.Score_Value);
        btnDisplay = (Button) findViewById(R.id.submitNext3);

        Intent intent1 = getIntent();
        score = intent1.getIntExtra("score", 0);
        Log.i("MainActivity4", "score" + Integer.toString(score));

        Intent intent = getIntent();
        String str = intent.getStringExtra("message");
        nameView.setText(str);

    }
     /*
    This method is called when Next Button is clicked
     */

    public void SubmitNext3(View view) {

        int selectedId = radioGroup.getCheckedRadioButtonId();
        radioSelectButton = (RadioButton) findViewById(selectedId);
        //Data Validation for the radiobutton
        if (radioSelectButton.getText().equals("No")) {
            Toast.makeText(getApplicationContext(), "Correct Answer", Toast.LENGTH_SHORT).show();
            score += 1;
            btnDisplay.setEnabled(false);
            score_display(score);
        } else {
            Toast.makeText(getApplicationContext(), "Wrong Answer", Toast.LENGTH_SHORT).show();
        }


        int id = Integer.parseInt(mscoreView.getText().toString());
        Intent page3 = new Intent(Main4Activity.this, Main5Activity.class);
        Log.i("MainActivity4", "score" + Integer.toString(id));
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
