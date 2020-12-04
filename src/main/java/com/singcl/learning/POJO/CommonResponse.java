package com.singcl.learning.POJO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CommonResponse <T> {

    private CommonResultField result;
    private T data;

    public CommonResponse(CommonCode commonCode) {
        this.result = new CommonResultField(commonCode);
    }

    public CommonResponse(CommonCode commonCode, T data) {
        this(commonCode);
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public CommonResultField getResult() {
        return result;
    }

    public void setResult(CommonResultField result) {
        this.result = result;
    }
}
