package com.memepatentoffice.mpoffice.domain.user.api.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserWithdrawRequest {
    private Long userId;

}
