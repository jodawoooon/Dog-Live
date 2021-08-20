package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("StatusUpdatePutRequest")
public class StatusUpdatePutReq {

    @ApiModelProperty
    String result;
}
