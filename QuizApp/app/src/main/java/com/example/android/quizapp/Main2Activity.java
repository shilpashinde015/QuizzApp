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

public class Main2Activity extends AppCompatActivity {

    public String name;
    private RadioGroup radioGroup;
    private RadioButton radioSelectButton;
    private Button btnDisplay;
    private TextView text;
    private TextView mscoreView;
    public static int score = 0;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        text = (TextView) findViewById(R.id.name_view);
        radioGroup = (RadioGroup) findViewById(R.id.radioGroup);
        mscoreView = (TextView) findViewById(R.id.Score_Value);
        btnDisplay = (Button) findViewById(R.id.submitNext);

        Intent intent = getIntent();
        String str = intent.getStringExtra("message");
        text.setText(str);

    }

    /**
     * This method is called When Submit Next Button is Clicked
     */
    public void SubmitNext(View view) {

        int selectedId = radioGroup.getCheckedRadioButtonId();
        radioSelectButton = (RadioButton) findViewById(selectedId);

        //Data Validation for the radiobutton
        if (radioSelectButton.getText().equals("8")) {
            Toast.makeText(getApplicationContext(), "Correct Answer", Toast.LENGTH_SHORT).show();
            score += 1;
            btnDisplay.setEnabled(false);
            score_display(score);
        } else {
            Toast.makeText(getApplicationContext(), "Wrong Answer", Toast.LENGTH_SHORT).show();
        }

        int id = Integer.parseInt(mscoreView.getText().toString());

        //This is the   object which will navigate to next page
        Intent newpage = new Intent(Main2Activity.this, Main3Activity.class);
        Log.i("Main2Activity", "score" + Integer.toString(id));
        newpage.putExtra("score", id);
        newpage.putExtra("Name", name);
        startActivity(newpage);
    }

    /*
        This method display score on textbox
     */
    private void score_display(int score) {
        mscoreView.setText("" + score);
    }

}
