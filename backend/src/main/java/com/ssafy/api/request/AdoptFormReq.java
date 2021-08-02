package com.ssafy.api.request;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.h2.util.json.JSONObject;
import org.h2.util.json.JSONString;

@Getter
@Setter
@ApiModel("adoptApplicationPostReq")
public class AdoptFormReq {
    @ApiModelProperty
    Long boardId;

    @ApiModelProperty
    Long boardType;

    @ApiModelProperty
    JSONString content;
}
