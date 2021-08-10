package com.ssafy.db.repository.board;


import com.ssafy.db.entity.board.Gugun;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Optional;


@Repository
public interface GugunRepository extends JpaRepository<Gugun, Long> {


    Optional<List<Gugun>> findGugunsBySidoCode(Long sidoCode);
}
