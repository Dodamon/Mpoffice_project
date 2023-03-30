package com.memepatentoffice.mpoffice.domain.meme.db.repository;

import com.memepatentoffice.mpoffice.db.entity.Meme;
import com.memepatentoffice.mpoffice.db.entity.UserMemeLike;
import com.memepatentoffice.mpoffice.db.entity.QUserMemeLike;
import com.memepatentoffice.mpoffice.domain.meme.api.response.MemeResponse;
import com.querydsl.core.types.CollectionExpression;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

import static com.memepatentoffice.mpoffice.db.entity.QMeme.meme;

@Repository
@Slf4j
public class MemeSearchRepository {

    private final EntityManager em;
    private final JPAQueryFactory queryFactory;

    public MemeSearchRepository(EntityManager em)
    {
        this.em = em;
        this.queryFactory = new JPAQueryFactory(em);
    }

    // default - 날짜 최신 순
    public Slice<Meme> searchMemeList(Long lastMemeId, String word, Pageable pageable) {
        log.info(word);
        log.info(String.valueOf(pageable.getPageSize()));
        List<Meme> results = queryFactory.selectFrom(meme)
                .where(
                        // no-offset 페이징 처리
                        ltMemeId(lastMemeId),
                        containMemeTitle(word)
                )
                .orderBy(meme.createdAt.desc())
                .limit(pageable.getPageSize()+1)
                .fetch();

        // 무한 스크롤 처리
        return checkLastPage(pageable, results);
    }

    private BooleanExpression ltMemeId(Long memeId) {
        if (memeId == 0) {
            return meme.id.lt(Long.MAX_VALUE);
        }
        return meme.id.lt(memeId);
    }
    private BooleanExpression containMemeTitle(String word) {
        if(word == null) {
            return null;
        }
        return meme.title.contains(word);
    }

    // 무한 스크롤 방식 처리하는 메서드
    private Slice<Meme> checkLastPage(Pageable pageable, List<Meme> results) {

        boolean hasNext = false;

        // 조회한 결과 개수가 요청한 페이지 사이즈보다 크면 뒤에 더 있음, next = true
        if (results.size() > pageable.getPageSize()) {
            hasNext = true;
            results.remove(pageable.getPageSize());
        }

        return new SliceImpl<>(results, pageable, hasNext);
    }
}
