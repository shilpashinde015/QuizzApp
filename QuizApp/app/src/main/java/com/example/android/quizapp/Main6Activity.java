package com.example.android.quizapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.RatingBar;
import android.widget.TextView;
import android.widget.Toast;

public class Main6Activity extends AppCompatActivity {
    int score;
    String name;
    private TextView nameView;
    private TextView mscoreView;
    private Button btn;
    private RatingBar bar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main6);
        nameView = (TextView) findViewById(R.id.name_view);


         bar = (RatingBar) findViewById(R.id.ratingBar1);
        mscoreView = (TextView) findViewById(R.id.Score_Value);
    }

    public void Score(View view){

        //Display score
        Intent intent1 = getIntent();
        score = intent1.getIntExtra("score", 0);
        Log.i("MainActivity6", "score" + Integer.toString(score));


        //Display Name
        Intent intent = getIntent();
        String str = intent.getStringExtra("message");
        nameView.setText(str);

        score_display(score);
        bar.setRating(score);
        Toast.makeText(getApplicationContext(), "Score" + score, Toast.LENGTH_SHORT).show();
}






    /*
        This method display score on textbox
     */
    private void score_display(int score) {
        mscoreView.setText("" + score);
    }

}
