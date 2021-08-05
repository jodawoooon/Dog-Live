package com.ssafy.db.entity.board;


import com.ssafy.db.entity.auth.Bookmark;
import com.ssafy.db.entity.auth.CounselingHistory;
import com.ssafy.db.entity.auth.User;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

/**
 * 유기견 공고 게시물 정보를 담을 Board Entity.
 */

@Entity
@Table(name="board", schema = "board")
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class Board extends BaseEntity{

  @Column(name="user_id")
  private String userId;                //사용자 ID

  @ManyToOne
  @JoinColumn(name="board_type")
  private BoardCategory type;                    // 공고 타입

  @Column(length = 30)
  private String title;                 // 게시글 제목

  @Column(name="thumbnail_url")
  private String thumbnailUrl;          // 게시글 썸네일


  @Column(name="reg_date")
  private LocalDateTime regDate; // 게시글 등록 일자


  public Board() {
    regDate = LocalDateTime.now();
  }

//  @OneToMany(mappedBy = "boardId", cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, orphanRemoval=true)
//  private List<BoardComment> boardComments;
//
//  @OneToMany(mappedBy = "boardId", cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, orphanRemoval=true)
//  private Set<BoardImage> boardImages;
//
//  @OneToMany(mappedBy = "boardId", cascade = {CascadeType.ALL}, fetch = FetchType.EAGER, orphanRemoval=true)
//  private Set<DogInformation> dogInformations;                   // 유기견 ID

}