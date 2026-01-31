### Coffee Website – CI/CD Pipeline with Jenkins, SonarQube & Docker

This repository demonstrates a **fully automated CI/CD pipeline** for a static Coffee Website using **GitHub, Jenkins, SonarQube, Docker, and AWS EC2**.

Every code commit triggers **code quality analysis**, followed by **containerized deployment** on a remote Docker server.

Architecture Overview

```text
Developer → GitHub → Jenkins → SonarQube → Docker → AWS EC2 → Browser
```

Workflow

1. Code is pushed to GitHub
2. Jenkins pulls latest code automatically
3. SonarQube performs static code analysis
4. If analysis succeeds, files are deployed to Docker server
5. Website is served via Nginx container

---

## 🧰 Tech Stack

| Category         | Tool             |
| ---------------- | ---------------- |
| Version Control  | GitHub           |
| CI/CD            | Jenkins          |
| Code Quality     | SonarQube        |
| Containerization | Docker           |
| Web Server       | Nginx (Alpine)   |
| Cloud            | AWS EC2 (Ubuntu) |

---

## 🗂️ Project Structure

```text
Coffee_WebSite/
│
├── Dockerfile
├── .dockerignore
├── index.html
├── aboutus.html
├── ordercup.html
├── thankyou.html
├── style.css
├── order.css
├── aboutus.css
│
├── components/
├── images/
├── styles/
└── README.md
```

---

## 🐳 Dockerfile (SonarQube Gold Standard)

Key highlights:

* Uses **non-root user**
* Explicit file copying
* Minimal Alpine image
* Secure permissions

```dockerfile
FROM nginxinc/nginx-unprivileged:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./Jenkins-CICD /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🧪 SonarQube Analysis

✔ Analysis **SUCCESSFUL**
✔ No critical vulnerabilities
✔ No permission issues
✔ No sensitive data leaks

**Project Key:** `Coffee-Shop`

SonarQube Dashboard:

```
http://<SONARQUBE_EC2_IP>:9000/dashboard?id=Coffee-Shop
```

##  Jenkins Job Configuration

### Jenkins Features Used

* Git SCM polling / Webhook
* SonarQube Scanner
* SSH Publisher plugin
* Remote Docker deployment

### Jenkins Deployment Step (Shell)

```bash
scp -r ./* ubuntu@<DOCKER_EC2_IP>:~/Coffee_website/
```

```bash
cd  Coffee_website
docker build -t coffee_website .
docker stop coffee_site || true
docker rm coffee_site || true
docker run -d -p 8085:80 --name coffee_site coffee_website
```
✔ Build Status: **SUCCESS**
✔ Files transferred via SSH
✔ Deployment completed

---

## 🌐 Access the Application

After successful pipeline execution:

```
http://<DOCKER_EC2_PUBLIC_IP>:8085
```

---

## 🔐 AWS Security Group Ports

| Service          | Port |
| ---------------- | ---- |
| Jenkins          | 8080 |
| SonarQube        | 9000 |
| Website (Docker) | 8085 |
| SSH              | 22   |

---

## 📌 Key Learnings

* End-to-end CI/CD automation
* Static code quality enforcement with SonarQube
* Secure Docker image creation
* Remote deployment via Jenkins SSH
* AWS EC2 production-style setup

---

