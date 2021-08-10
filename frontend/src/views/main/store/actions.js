// 비동기 API
import $axios from "axios";
import { getLoginUserInfo } from "./getters";

// Kakao 서버로 받은 code로 AccessToken 가져오기
export function requestAccessToken({ state }, payload) {
  const url = "/kakao/oauth?code=" + payload;
  return $axios.get(url);
}

// Kakao 서버로 받은 AccessToken으로 UserInfo 가져오기
export function requestUserInfo({ state }, payload) {
  const url = "/kakao/login";
  let body = payload;
  console.log(body);
  return $axios.post(url, body);
}

// Kakao 로그아웃
export function requestKakaoLogout({ state }) {
  const url = "/kakao/logout";
  return $axios.get(url);
}

// 채팅방 생성 요청
export function createChatRoom({ state }, payload) {
  const url = "/chatroom";
  let roomName = payload;
  return $axios.post(url, roomName);
}

// 채팅방 목록 요청
export function requestChatRoomList({ state }) {
  const url = "/chatroom";
  return $axios.get(url);
}

// 사용자 북마크 리스트를 불러오기
export function requestBookmarkList({ state }, payload) {
  const url = "/users/bookmark/" + payload;
  let body = payload;
  return $axios.get(url);
}

// 사용자가 작성한 글 리스트 불러오기
export function requestUserPostList({ state }, payload) {
  const url = "/board/myboard/" + payload;
  let body = payload;
  return $axios.get(url);
}

// 신청자 리스트 불러오기
export function requestApplicant({ state }, payload) {
  const url = "/users/applicant/" + payload;
  let body = payload;
  return $axios.get(url);
}

// 신청 결과 리스트 불러오기
export function requestApplyResult({ state }, payload) {
  const url = "/users/counseling/" + payload;
  let body = payload;
  return $axios.get(url);
}

// 게시판 공고 등록
export function requestRegisterBoard({ state }, payload) {
  const url = "/board";
  console.log(payload);
  return $axios.post(url, payload);
}

//게시판 공고 수정
export function requestModifyBoard({ state }, payload) {
  const url = "/board/" + payload.boardId;
  console.log(payload);
  return $axios.put(url, payload.data);
}

//게시판 공고 삭제
export function requestDeleteBoard({ state }, payload) {
  const url = "/board/" + payload;
  console.log(payload);
  return $axios.delete(url);
}

// 사용자 프로필 정보 가져오기
export function requestUserProfile({ state }, payload) {
  const url = "/users/" + payload;
  return $axios.get(url);
}

// 커뮤니티 게시글 목록 가져오기
export function requestCommunityBoardList({state}){
  const url = "/community/list"
  return $axios.get(url);
}

// 사용자 프로필 수정
export function changeUserInfo({ state }, payload) {
  const userId = payload.userId;
  console.log(payload.data);
  const url = "/users/" + userId;
  return $axios.put(url, payload.data);
}

// 신청결과 수정
export function changeResult({state}, payload){
  const id = payload.id;
  const url = "/adopt/" + id;
  return $axios.put(url, payload.status) 
}
