export function hey(message: string): string {
  message = message.trim();
  if (message == '' || message.replace(/\s/g, '') == '') {
    return "Fine. Be that way!";
  } else if (isUpperCase(message) && message.charAt(message.length - 1) == '?') {
    return "Calm down, I know what I'm doing!";
  } else if (isUpperCase(message)) {
    return "Whoa, chill out!";
  } else if (message.charAt(message.length - 1) == '?') {
    return "Sure.";
  } else {
    return "Whatever.";
  }
}

export function isUpperCase(str: string): boolean {
  const hasUpperCase = /[A-Z]/.test(str);
  const noLowerCase = !/[a-z]/.test(str);
  return hasUpperCase && noLowerCase;
}