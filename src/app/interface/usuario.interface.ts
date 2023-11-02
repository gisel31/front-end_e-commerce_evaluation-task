export interface Usuario {
    username: string;
    password: string;
}

export interface UsuarioResponse {
    status: number;
    message: string[];
    error: boolean;
    data: {
        token: string;
        '0': {id: number;
        username: string;
        [key: string]: any;
        };
        roles:[
            {
               rol_id: number;
               nombre: string; 
               [key: string]: any;
            }
        ]
    };
}