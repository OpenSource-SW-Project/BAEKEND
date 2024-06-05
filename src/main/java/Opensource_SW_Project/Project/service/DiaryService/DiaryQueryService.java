package Opensource_SW_Project.Project.service.DiaryService;

import Opensource_SW_Project.Project.domain.Diary;
import Opensource_SW_Project.Project.web.dto.Diary.DiaryRequestDTO;

import java.util.List;

public interface DiaryQueryService {
    Diary findById(Long diaryId);
    //Diary diaryFind(DiaryRequestDTO.GetDiaryRequestDTO request);

    List<Diary> getUserDiary(Long userId);
}
