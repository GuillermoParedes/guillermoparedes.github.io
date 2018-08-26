---
title: Ssh para Github, Gitlab, Bitbucket, etc
date: '2018-03-30'
---

En este post veremos como configurar nuestro equipo de desarrollo con llaves SSH para GITHUB y GITLAB. Esto puede ser aplicado a BITBUCKET entre otros.
Estos pasos fueron ejecutados en el sistema operativo Debian 9.

Definición
SSH o Secure Shell, es un protocolo de administración remota que permite a los usuarios controlar y modificar sus servidores remotos a través de Internet. El servicio se creó como un reemplazo seguro para el Telnet sin cifrar y utiliza técnicas criptográficas para garantizar que todas las comunicaciones hacia y desde el servidor remoto sucedan de manera encriptada. Proporciona un mecanismo para autenticar un usuario remoto, transferir entradas desde el cliente al host y retransmitir la salida de vuelta al cliente.
Puedes ver mas en este [enlace](https://www.hostinger.es/tutoriales/que-es-ssh).

### Paso 1.

En nuestra terminal escribimos el siguiente comando, con el correo que usamos en github.

```ssh
  $ ssh-keygen -t rsa -C "nombre_correo@dominio.extension"
```

### Paso 2.

Nos retornara el siguiente mensaje.

```ssh
$Generating public/private rsa key pair.
Enter file in which to save the key (/home/user_name/.ssh/id_rsa):
```

Este punto puedes ponerle un nombre para identificar la llave, en mi caso pondre “github_me” y le damos enter. `github_me`

Luego pondremos una contraseña para la llave ssh que estamos creando. Ahora repetimos los mismos pasos: 1 y 2, pero para gitlab.

### Paso 3.

En nuestra terminal ejecutamos el siguiente comando.

```ssh
ls -la ~/.ssh
bitbucket_me      config              github_me      known_hosts
bitbucket_me.pub  environment-chigui  github_me.pub
```

### Paso 4.

Ahora nos ubicaremos en la carpeta “.ssh”, desde la terminal y creamos un archivo llamado “config”.

```ssh
cd ~/.ssh
touch config
vim config
```

Y dentro del archivo ponemos lo siguiente:

```bash
# Personal account
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_me

# Gitlab account
Host gitlab.com
HostName gitlab.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitlab_me
```

### Paso 5

Agregamos nuestras llaves que creamos, con el siguiente comando.

```ssh
ssh-add ~/.ssh/github_me
ssh-add ~/.ssh/gitlab_me
```

Una vez generado nuestras llaves, tenemos que agregar dichas llaves ssh, a GITHUB y GITLAB, propiamente dichos.

### Paso 6

Una vez ya agregada nuestras “ssh” generados a GITHUB y GITLAB, probamos la conectividad, con el siguiente comando.

```ssh
ssh -T git@github.com

Enter passphrase for key '/home/gd/.ssh/github_me':
Hi GuillermoParedes! You've successfully authenticated, but GitHub does not provide shell access.
```

Realizando el test de conectividad con las llaves generadas.
Y listo, ya tenemos configurado nuestras llaves ssh en nuestro equipo de desarrollo.
