package com.example.hunglv.applictioninfinito;

import android.content.Intent;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.net.URISyntaxException;
import java.util.HashMap;

import io.socket.client.IO;
import io.socket.client.Socket;

public class MainActivity extends AppCompatActivity {

    private Socket msocket;
    int REQUEST_CODE_EDIT = 123;
    int check = 0;

    EditText edit2_month,edit2_user,edit2_amount;
    Button btn2_history, btn2_transaction;
    HashMap<String, Boolean> hashMap = new HashMap<>();

    EditText edit_user, edit_pass1, edit_pass2;
    Button btn_login;
    Intent intent;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        intent = new Intent(this, Main2Activity.class);
        anhxa();

        try {
            msocket = IO.socket("http://10.79.1.167:8000/");
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        msocket.connect();

//        emit server
        // emit server create account contain wallet
        btn_login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(edit_user.getText().toString().compareTo("")!=0 && edit_pass1.getText().toString().compareTo("")!=0
                        && edit_pass1.getText().toString().compareTo(edit_pass2.getText().toString())==0) {
                    Login login = new Login();
                    login.user = edit_user.getText().toString();
                    login.password = edit_pass1.getText().toString();
                    msocket.emit("client_login", login.user);
                    Toast.makeText(MainActivity.this, "successful", Toast.LENGTH_LONG).show();
                    hashMap.put(login.user,true);
                    setContentView(R.layout.activity_main2);

                }

            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        if(requestCode == REQUEST_CODE_EDIT && resultCode == RESULT_OK) {
//            String s = data.getStringExtra("useramount");
            Toast.makeText(MainActivity.this, "123", Toast.LENGTH_LONG).show();
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    public void anhxa() {
        edit_user = (EditText) findViewById(R.id.edit_user);
        edit_pass1 = (EditText) findViewById(R.id.edit_pass1);
        edit_pass2 = (EditText) findViewById(R.id.edit_pass2);
        btn_login = (Button) findViewById(R.id.btn_login);
        intitHashMap();
    }

    public void intitHashMap() {
        hashMap.put("shop", true);
        hashMap.put("market", true);
        hashMap.put("restaurants", true);
        hashMap.put("jacky", true);
    }
}
