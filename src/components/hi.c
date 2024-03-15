#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <stdbool.h>
#include <fcntl.h>

#define PORT 8888

// Hàm nhận file từ server
void receive_file(int server_socket, const char *filename) {
    char file_size_str[20];
    recv(server_socket, file_size_str, sizeof(file_size_str), 0);
    long file_size = strtol(file_size_str, NULL, 10);

    FILE *file = fopen(filename, "wb");
    if (file == NULL) {
        perror("Mở file thất bại");
        return;
    }

    char buffer[1024];
    size_t bytesReceived;

    while (file_size > 0) {
        size_t bytesRead = recv(server_socket, buffer, sizeof(buffer), 0);
        if (bytesRead <= 0) {
            perror("Lỗi khi nhận file");
            break;
        }

        fwrite(buffer, 1, bytesRead, file);
        file_size -= bytesRead;
    }

    fclose(file);
}
//Ham thuc hien phep tinh


int main() {
    int sock = 0, valread;
    struct sockaddr_in serv_addr;
    char message[1024] = {0};
    char buffer[1024] = {0};
    bool kiemtra = false;
    char time_buffer[1024];

    // Tạo socket
    if ((sock = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
        printf("\n Lỗi tạo socket \n");
        return -1;
    }

    // Cài đặt thông tin địa chỉ và cổng của server
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(PORT);

    // Chuyển đổi địa chỉ IP từ chuỗi sang định dạng cấu trúc sockaddr_in
    if (inet_pton(AF_INET, "127.0.0.1", &serv_addr.sin_addr) <= 0) {
        printf("\nĐịa chỉ không hợp lệ/ Địa chỉ không được hỗ trợ \n");
        return -1;
    }

    // Kết nối tới server
    if (connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
        printf("\nKết nối thất bại \n");
        return -1;
    } else {
        while (!kiemtra) {
            valread = read(sock, buffer, 1024);
            printf(" \nFrom Server: %s\n", buffer);
             memset(buffer, 0, sizeof(buffer));
            
            

            if (strncmp(buffer, "sendfile", 8) == 0) {
                char *filename = buffer + 9; // Giả sử lệnh là "sendfile filename"
                filename[strlen(filename) - 1] = '\0'; // Loại bỏ ký tự newline
                receive_file(sock, filename);
            } else {
                printf("Client: ");
                fgets(message, sizeof(message), stdin);
                send(sock, message, strlen(message), 0);            
             if(strcmp(message, "Caculator\n") == 0){
             memset(message, 0, sizeof(message));
               // char nhapa[1024];
               //char nhapb[1024];
               char input[1024]={0};
               double a;
               double b;
               char answer[1024]={0};
               char question[1024]={0};

               
               printf("Nhap a va b (cach nhau bang dau cach): ");
	    	fgets(input, sizeof(input), stdin);
	    	sscanf(input, "%lf %lf", &a, &b);

	    	// Gửi cả hai số qua socket
	    	send(sock, &a, sizeof(double), 0);
	    	send(sock, &b, sizeof(double), 0);
	    	
                //Phep tinh
                valread = read(sock, question, 1024);
            	printf(" \nServer replied : %s\n", question);
            	memset(question, 0, sizeof(question));
            	//Tra loi
            	 printf("Client choose: ");
                fgets(answer, sizeof(answer), stdin);
                send(sock, answer, strlen(answer), 0);
                //
                
            	//ketqua
            	recv(sock, &kq, sizeof(double), 0);
            	 printf("\n==> Received ket qua: %0.2f\n", kq);
                }
                if (strcmp(message, "Time\n") == 0) {
                memset(message, 0, sizeof(message));
                recv(sock, time_buffer, sizeof(time_buffer), 0);
		 // In thời gian ra màn hình
		 printf("\nThoi gian hien tai la: %s", time_buffer);
                }
                }
                if (strcmp(message, "exit\n") == 0) {
                    break;
                }
        }
    }

    // Đóng kết nối
    close(sock);

    return 0;
}

 
