public class a {
    public static boolean validarCPF(String cpf) {
        cpf = cpf.replace(".", "").replace("-", "");
        if (cpf.length() != 11) {
            return false;
        }
        if (cpf.matches("(\\d)\\1+")) {
            return false;
        }
        int soma = 0;
        for (int i = 0; i < 9; i++) {
            soma += Integer.parseInt(String.valueOf(cpf.charAt(i))) * (10 - i);
        }
        int resto = 11 - (soma % 11);
        int digitoVerificador = resto == 10 || resto == 11 ? 0 : resto;
        if (digitoVerificador != Integer.parseInt(String.valueOf(cpf.charAt(9)))) {
            return false;
        }    
        soma = 0;
        for (int i = 0; i < 10; i++) {
            soma += Integer.parseInt(String.valueOf(cpf.charAt(i))) * (11 - i);
        }
        resto = 11 - (soma % 11);
        digitoVerificador = resto == 10 || resto == 11 ? 0 : resto;
        if (digitoVerificador != Integer.parseInt(String.valueOf(cpf.charAt(10)))) {
            return false;
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        String cpf = "123.456.789-00";
        if (validarCPF(cpf)) {
            System.out.println("CPF válido.");
        } else {
            System.out.println("CPF inválido.");
        }
    }
}
