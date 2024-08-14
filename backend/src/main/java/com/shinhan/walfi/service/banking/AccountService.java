package com.shinhan.walfi.service.banking;

import com.shinhan.walfi.dto.banking.AccountResDto;

public interface AccountService {
    AccountResDto getAccounts(String userId, String userMainAccount);
    AccountResDto getNationAccounts(String userId, String userMainAccount, String currency);
}
