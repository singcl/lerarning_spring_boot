package com.singcl.learning.POJO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CommonResultField {
    private Integer code;
    private String msg;

    public CommonResultField(CommonCode commonCode) {
        this.code = commonCode.getCode();
        this.msg = commonCode.getMsg();
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
