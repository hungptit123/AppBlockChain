package com.example.hunglv.applictioninfinito;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.util.HashMap;
import java.util.Map;

public class Main2Activity extends AppCompatActivity {

    EditText edit2_month,edit2_user,edit2_amount;
    Button btn2_history, btn2_transaction;
    HashMap<String, Boolean> hashMap = new HashMap<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        anhXa();
        intitHashMap();
        btn2_transaction.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent();
                String data = edit2_amount.getText().toString() + "/" + edit2_user.getText().toString();
                intent.putExtra("useramount", data);
                setResult(RESULT_OK, intent);
                finish();

            }
        });
    }

    public void anhXa() {
        edit2_amount = (EditText) findViewById(R.id.edit2_amount);
        edit2_month = (EditText) findViewById(R.id.edit2_month);
        edit2_user = (EditText) findViewById(R.id.edit_user);
        btn2_history = (Button) findViewById(R.id.btn2_history);
        btn2_transaction = (Button) findViewById(R.id.btn2_transaction);
    }
    public void intitHashMap() {
        hashMap.put("shop", true);
        hashMap.put("market", true);
        hashMap.put("restaurants", true);
        hashMap.put("jacky", true);
    }
}
