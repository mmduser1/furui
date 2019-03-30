"use strict";
{
  /**
   * 追加ボタンの動作
   */
  let addButton = () => {
    let addUser = document.getElementById("ng_user_input");
    let ngUsers = document.getElementById("ng_users");
    if (addUser.value) {
      ngUsers.value = (ngUsers.value + "\r\n" + addUser.value).trim();
    }
  };

  /**
   * browser.storage.localにアドオンの設定を保存
   */
  let storeSettings = () => {
    let ngUserArray = document
      .getElementById("ng_users")
      .value.split(/\r\n|\r|\n/);

    chrome.storage.local.set({
      ngusers: ngUserArray
    });
  };

  /**
   * オプションページを開いたときに現在の設定を反映する
   * ローカルストレージに設定がないときは空
   */
  let updateUI = restoredSettings => {
    let ngUsers = document.getElementById("ng_users");
    if (typeof restoredSettings.ngusers !== "undefined") {
      ngUsers.value = restoredSettings.ngusers
        .join(",")
        .split(",")
        .join("\r\n");
    }
  };

  /**
   * オプションページを開いたときに現在の設定を反映する
   * ローカルストレージに設定がないときは空
   */
  const gettingStoredSettings = chrome.storage.local.get(updateUI);

  /**
   * バインド
   */
  document
    .getElementById("save-button")
    .addEventListener("click", storeSettings);
  document
    .getElementById("ng_user_input_btn")
    .addEventListener("click", addButton);
}
