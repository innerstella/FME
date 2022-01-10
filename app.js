#include <stdio.h>
#include <string.h> 

int count = 0; //입력되지 않은 공간의 첫번째 

struct address {  //주소록 구조체 
	char name[10]; 
	char phoneNumber [15]; 
	char home [50]; 
	char birth [8]; 
} book[50];

void list (void){  //목록보기 
	int i;
	if (count==0) {
		printf("\n등록된 정보가 없습니다. \n\n");
	}
	else {
		printf("\n이름 \t전화번호 \t주소 \t\t생일\n");
		printf("======================================================\n");
		for(i=0; i<count; i++){
			printf("%s\t %s\t %s\t %s\t \n", book[i].name, book[i].phoneNumber, book[i].home, book[i].birth);
		}
	}
}

void append(void){   //추가하기 
	count ++;
	printf("추가할 이름 : ");
	scanf("%s", book[count-1].name);
	printf("추가할 번호 : ");
	scanf("%s", book[count-1].phoneNumber);
	printf("추가할 주소 : ");
	scanf("%s", book[count-1].home);
	printf("추가할 생일 : ");
	scanf("%s", book[count-1].birth);
	printf("입력되었습니다.\n");
}

void search(void){
	char searchName[10];
	char bookName[10];
	printf("검색할 이름 : ");
	scanf("%s", searchName);
	printf("%s의 정보입니다.\n", searchName);
	
	int j;
	for (j=0; j<count; j++){
		strcpy(bookName, book[j].name); //주소록에 있는 이름 하나를 bookName에 저장 

		int result = strcmp(bookName, searchName); //입력된 문자열 비교 
		//printf("result is %d", result);
		if (result == 0){
			printf("\n이름 \t전화번호 \t주소 \t\t생일\n");
			printf("%s\t %s\t %s\t %s\t \n", book[j].name, book[j].phoneNumber, book[j].home, book[j].birth);
		}
	}
}

void del(void){
	char deleteName[10];
	char bookName[10];
	printf("삭제할 이름 : ");
	scanf("%s", deleteName);
	
	int k;
	for (k=0; k<count; k++){
		strcpy(bookName, book[k].name);
		
		int result = strcmp(bookName, deleteName);
		
		switch(result){
			case 0:
				count--;
				strset(book[k].name, '\0');
				strset(book[k].phoneNumber,'\0');
				strset(book[k].home,'\0');
				strset(book[k].birth,'\0');
				printf("%s의 정보를 삭제했습니다.\n", deleteName);
				break;
			case 1:
				break;
			case -1:
				break;
			
		}
	}
}


int main()
{
	int menu;
	do{
		printf("======================================================\n");
		printf("------------------주소록 메뉴-------------------------\n");
		printf("1) 목록    2) 추가    3) 검색    4) 삭제    5) 종료 \n");
		printf("======================================================\n");
		printf("메뉴를 선택해주세요 ");
		menu = getchar(); //메뉴 받기  
	
		switch (menu){
			case '1':
				list();
				break;
			case '2':
				append();
				break;
			case '3':
				search();
				break;
			case '4':
				del();
				break; 
			case '5':
				printf("종료합니다.\n");
				break;
			default:
				printf("존재하지 않는 메뉴입니다.\n");
		}
	} while(menu != '5' && (menu = getchar()) == '\n');
	
	return 0;
}